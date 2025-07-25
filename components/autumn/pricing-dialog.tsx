import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ArrowBoldRight from "@/components/icons/arrow-bold-right";
import React from "react";

export const PricingDialog = ({
  open,
  setOpen,
  children,
  className,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className={cn(
          className,
          "p-0 rounded-lg text-foreground gap-0 text-sm shadow-inner"
        )}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};

export const PricingDialogTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <DialogTitle className={cn(className, "font-bold text-xl px-6 pt-4 pb-2")}>
      {children}
    </DialogTitle>
  );
};

export const Information = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        className,
        "text-foreground px-6 pb-3 text-sm whitespace-pre-line"
      )}
    >
      {children}
    </div>
  );
};

export const PriceItem = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "flex flex-col text-muted-foreground pb-4 sm:pb-0 gap-1 sm:flex-row justify-between px-6 sm:h-7 sm:gap-2 sm:items-center  sm:whitespace-nowrap ",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const QuantityInput = ({
  children,
  onChange,
  value,
  className,
  ...props
}: {
  children: React.ReactNode;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const currentValue = Number(value) || 0;

  const handleValueChange = (newValue: number) => {
    const syntheticEvent = {
      target: { value: String(newValue) },
    } as React.ChangeEvent<HTMLInputElement>;
    onChange(syntheticEvent);
  };

  return (
    <div
      className={cn(className, "flex flex-row items-center gap-4")}
      {...props}
    >
      <div className="flex items-center gap-1">
        <Button
          variant="secondary"
          size="icon"
          onClick={() =>
            currentValue > 0 && handleValueChange(currentValue - 1)
          }
          disabled={currentValue <= 0}
          className="h-6 w-6 pb-0.5"
        >
          -
        </Button>
        <span className="w-8 text-center text-foreground">{currentValue}</span>
        <Button
          variant="secondary"
          size="icon"
          onClick={() => handleValueChange(currentValue + 1)}
          className="h-6 w-6 pb-0.5"
        >
          +
        </Button>
      </div>
      {children}
    </div>
  );
};

export const PricingDialogFooter = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <DialogFooter
      className={cn(
        className,
        "flex flex-col sm:flex-row justify-between py-3 px-4 bg-stone-100 dark:bg-zinc-900 rounded-b-lg mt-4 border-t"
      )}
    >
      {children}
    </DialogFooter>
  );
};

export const TotalPrice = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-2 w-full mb-4 sm:mb-0 font-semibold flex justify-between items-center">
      {children}
    </div>
  );
};

export const PricingDialogButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ children, onClick, className, ...props }, ref) => {
  return (
    <Button
      onClick={onClick}
      {...props}
      ref={ref}
      className={cn(className, "shadow-sm shadow-stone-400")}
    >
      {children}
      <ArrowBoldRight className="!h-3" />
    </Button>
  );
});
PricingDialogButton.displayName = "PricingDialogButton";
