'use client';

import {
  MorphingPopover,
  MorphingPopoverTrigger,
  MorphingPopoverContent,
} from './morphing-popover';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useContext } from 'react';
import { MorphingPopoverContext } from './morphing-popover';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

function MyForm({ onSuccess }: { onSuccess: () => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ name?: boolean; email?: boolean }>({});
  const context = useContext(MorphingPopoverContext);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: boolean; email?: boolean } = {};

    if (!name) {
      newErrors.name = true;
    }
    if (!email) {
      newErrors.email = true;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form gönderildi:', { name, email });
      setName('');
      setEmail('');
      onSuccess();
      context?.close(); // gönderince kapan
    }
  };

  const shakeAnimation = {
    x: [-5, 5, -5, 5, 0],
    transition: { duration: 0.3 },
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-3 p-3" noValidate>
      <h3 className="font-semibold text-lg mb-1">Bilgilerini Gir</h3>

      <motion.div
        className="flex flex-col gap-1"
        animate={errors.name ? shakeAnimation : {}}
      >
        <label htmlFor="name" className="text-sm font-medium">
          İsim
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={cn(
            'w-full rounded-md border bg-white px-2 py-1.5 text-sm text-zinc-900 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:bg-zinc-800 dark:text-zinc-100',
            errors.name ? 'border-red-500' : 'border-zinc-300 dark:border-zinc-600'
          )}
          placeholder="Adınızı girin"
        />
      </motion.div>

      <motion.div
        className="flex flex-col gap-1"
        animate={errors.email ? shakeAnimation : {}}
      >
        <label htmlFor="email" className="text-sm font-medium">
          E-posta
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={cn(
            'w-full rounded-md border bg-white px-2 py-1.5 text-sm text-zinc-900 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:bg-zinc-800 dark:text-zinc-100',
            errors.email ? 'border-red-500' : 'border-zinc-300 dark:border-zinc-600'
          )}
          placeholder="ornek@mail.com"
        />
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="mt-2 rounded-md bg-blue-600 px-3 py-2 text-white text-sm font-medium shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Gönder
      </motion.button>
    </form>
  );
}

export default function PopoverForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="flex flex-col items-center gap-2">
      <AnimatePresence mode="wait">
        {
          isSubmitted ? (
            <motion.div
              key="submitted"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center justify-center p-3 rounded-md bg-green-500 text-white"
            >
              <Check className="h-6 w-6" />
            </motion.div>
          ) : (
            <MorphingPopover key="form">
              <MorphingPopoverTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-md bg-blue-600 text-white shadow-sm"
                >
                  Contact
                </motion.button>
              </MorphingPopoverTrigger>
              <MorphingPopoverContent className="w-72">
                <MyForm onSuccess={() => setIsSubmitted(true)} />
              </MorphingPopoverContent>
            </MorphingPopover>
          )
        }
      </AnimatePresence>
      {isSubmitted && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-zinc-600 dark:text-zinc-400"
        >
          En kısa zamanda ulaşacağız
        </motion.p>
      )}
    </div>
  );
}