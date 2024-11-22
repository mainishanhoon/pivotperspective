import { cn } from '@/lib/utils';

export const Lights: React.FC<{ className?: React.ReactNode }> = ({
  className,
}) => (
  <div className={cn('h-full w-full overflow-hidden', className)}>
    <div
      className={'relative bottom-[-200px] h-full w-full'}
      style={{
        background:
          'conic-gradient(from 180deg at 50% 50%,var(--blue-500) 0deg,var(--cyan-400) 180deg,var(--yellow-400) 1turn)',
        filter: 'blur(75px)',
        opacity: '20%',
      }}
    />
  </div>
);
