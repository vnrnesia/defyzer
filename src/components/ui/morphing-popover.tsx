'use client';

import {
  useState,
  useId,
  useRef,
  useEffect,
  createContext,
  useContext,
  isValidElement,
  useCallback,
  useMemo,
} from 'react';
import {
  AnimatePresence,
  MotionConfig,
  motion,
  Transition,
  Variants,
} from 'motion/react';
import { cn } from '@/lib/utils';

// ------------------------------
// Default transition ayarları
// ------------------------------
const TRANSITION: Transition = {
  type: 'spring',
  bounce: 0.1,
  duration: 0.4,
};

// ------------------------------
// Context tipi ve tanımı
// ------------------------------
export type MorphingPopoverContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  uniqueId: string;
  variants?: Variants;
};

export const MorphingPopoverContext =
  createContext<MorphingPopoverContextValue | null>(null);

// ------------------------------
// Popover aç/kapat mantığı
// ------------------------------
function usePopoverLogic({
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
}: {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
} = {}) {
  const uniqueId = useId();
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);

  const isOpen = controlledOpen ?? uncontrolledOpen;

  const open = useCallback(() => {
    if (controlledOpen === undefined) setUncontrolledOpen(true);
    onOpenChange?.(true);
  }, [controlledOpen, onOpenChange]);

  const close = useCallback(() => {
    if (controlledOpen === undefined) setUncontrolledOpen(false);
    onOpenChange?.(false);
  }, [controlledOpen, onOpenChange]);

  return { isOpen, open, close, uniqueId };
}

// ------------------------------
// Ana Popover bileşeni
// ------------------------------
export type MorphingPopoverProps = {
  children: React.ReactNode;
  transition?: Transition;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  variants?: Variants;
  className?: string;
} & React.ComponentProps<'div'>;

function MorphingPopover({
  children,
  transition = TRANSITION,
  defaultOpen,
  open: controlledOpen,
  onOpenChange,
  variants,
  className,
  ...props
}: MorphingPopoverProps) {
  const { isOpen, open, close, uniqueId } = usePopoverLogic({ defaultOpen, open: controlledOpen, onOpenChange });

  const contextValue = useMemo(
    () => ({ isOpen, open, close, uniqueId, variants }),
    [isOpen, open, close, uniqueId, variants]
  );

  return (
    <MorphingPopoverContext.Provider value={contextValue}>
      <MotionConfig transition={transition}>
        <div
          className={cn('relative flex items-center justify-center', className)}
          key={uniqueId}
          {...props}
        >
          {children}
        </div>
      </MotionConfig>
    </MorphingPopoverContext.Provider>
  );
}

// ------------------------------
// Trigger bileşeni (buton vb.)
// ------------------------------
export type MorphingPopoverTriggerProps = {
  asChild?: boolean;
  children: React.ReactNode;
  className?: string;
} & React.ComponentProps<typeof motion.button>;

function MorphingPopoverTrigger({
  children,
  className,
  asChild = false,
  ...props
}: MorphingPopoverTriggerProps) {
  const context = useContext(MorphingPopoverContext);
  if (!context) {
    throw new Error(
      'MorphingPopoverTrigger must be used within MorphingPopover'
    );
  }

  if (asChild && isValidElement(children)) {
    const MotionComponent = motion.create(
      children.type as React.ForwardRefExoticComponent<any>
    );
    const childProps = children.props as Record<string, unknown>;

    return (
      <MotionComponent
        {...childProps}
        onClick={context.open}
        layoutId={`popover-trigger-${context.uniqueId}`}
        className={childProps.className}
        key={context.uniqueId}
        aria-expanded={context.isOpen}
        aria-controls={`popover-content-${context.uniqueId}`}
      />
    );
  }

  return (
    <motion.div
      key={context.uniqueId}
      layoutId={`popover-trigger-${context.uniqueId}`}
      onClick={context.open}
    >
      <motion.button
        {...props}
        layoutId={`popover-label-${context.uniqueId}`}
        key={context.uniqueId}
        className={className}
        aria-expanded={context.isOpen}
        aria-controls={`popover-content-${context.uniqueId}`}
      >
        {children}
      </motion.button>
    </motion.div>
  );
}

// ------------------------------
// İçerik bileşeni (popover içi)
// ------------------------------
export type MorphingPopoverContentProps = {
  children: React.ReactNode;
  className?: string;
} & React.ComponentProps<typeof motion.div>;

function MorphingPopoverContent({
  children,
  className,
  ...props
}: MorphingPopoverContentProps) {
  const context = useContext(MorphingPopoverContext);
  if (!context)
    throw new Error(
      'MorphingPopoverContent must be used within MorphingPopover'
    );

  const ref = useRef<HTMLDivElement>(null);

  // ⚙️ Dış tıklama + Esc kapatma mantığı (form dostu, %100 güvenli)
  useEffect(() => {
    if (!context.isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!ref.current) return;

      // composedPath -> React + Motion ortamında güvenli dış klik kontrolü
      const path = event.composedPath();
      if (path.includes(ref.current)) return;

      context.close();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') context.close();
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [context.isOpen, context.close]);

  return (
    <AnimatePresence>
      {context.isOpen && (
        <motion.div
          {...props}
          ref={ref}
          layoutId={`popover-trigger-${context.uniqueId}`}
          key={context.uniqueId}
          id={`popover-content-${context.uniqueId}`}
          role="dialog"
          aria-modal="true"
          className={cn(
            'absolute z-50 overflow-hidden rounded-md border border-zinc-950/10 bg-white p-2 text-zinc-950 shadow-md dark:border-zinc-50/10 dark:bg-zinc-700 dark:text-zinc-50',
            className
          )}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={context.variants}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ------------------------------
// Exportlar
// ------------------------------
export {
  MorphingPopover,
  MorphingPopoverTrigger,
  MorphingPopoverContent,
};
