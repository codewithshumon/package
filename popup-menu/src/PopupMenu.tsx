import React, { useState, useRef, useEffect } from "react";

export interface PopupMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  menuClassName?: string;
  position?: "up" | "down" | "left" | "right";
  onOpenChange?: (open: boolean) => void;
  onClose?: () => void;
}

export const PopupMenu: React.FC<PopupMenuProps> = ({
  trigger,
  children,
  header,
  footer,
  className = "",
  menuClassName = "",
  position = "down",
  onOpenChange,
  onClose
}) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    onOpenChange?.(isOpen);
    if (!isOpen) {
      onClose?.();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        handleOpenChange(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Position classes for horizontal alignment
  const horizontalPositionClasses = {
    left: "left-0",
    right: "right-0",
    center: "left-1/2 transform -translate-x-1/2"
  };

  // Position classes for vertical alignment
  const verticalPositionClasses = {
    up: "bottom-full mb-2",
    down: "top-full mt-2"
  };

  // Determine which horizontal position to use based on vertical position
  const getHorizontalPosition = () => {
    switch (position) {
      case "up":
      case "down":
        return "left-0"; // Default to left for up/down positions
      case "left":
        return "right-full mr-2 top-1/2 transform -translate-y-1/2";
      case "right":
        return "left-full ml-2 top-1/2 transform -translate-y-1/2";
      default:
        return "left-0";
    }
  };

  // Determine which vertical position to use
  const getVerticalPosition = () => {
    switch (position) {
      case "up":
        return "bottom-full mb-2";
      case "down":
        return "top-full mt-2";
      case "left":
      case "right":
        return "top-1/2 transform -translate-y-1/2";
      default:
        return "top-full mt-2";
    }
  };

  // Get the appropriate width class based on position
  const getWidthClass = () => {
    if (position === "left" || position === "right") {
      return ""; // No min-width for side positions to allow natural width
    }
    return "min-w-[120px]";
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Trigger */}
      <div 
        onClick={() => handleOpenChange(!open)}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleOpenChange(!open);
          }
        }}
        className="cursor-pointer"
      >
        {trigger}
      </div>

      {/* Menu */}
      {open && (
        <div
          ref={menuRef}
          className={`absolute z-50 flex flex-col bg-white rounded-lg border border-[#e0e1e4] gap-2 p-2 shadow-lg ${getWidthClass()} ${getHorizontalPosition()} ${getVerticalPosition()} ${menuClassName}`}
          role="menu"
          aria-orientation={position === "left" || position === "right" ? "horizontal" : "vertical"}
        >
          {/* Header */}
          {header && (
            <div className="p-2 border-b border-[#e0e1e4] mb-1">
              {header}
            </div>
          )}

          {/* Menu Items */}
          <div className="flex flex-col gap-1">
            {React.Children.map(children, (child) =>
              React.isValidElement(child)
                ? React.cloneElement(child, { 
                    onClick: () => {
                      child.props.onClick?.();
                      handleOpenChange(false);
                    }
                  } as any)
                : child
            )}
          </div>

          {/* Footer */}
          {footer && (
            <div className="p-2 border-t border-[#e0e1e4] mt-1">
              {footer}
            </div>
          )}
        </div>
      )}
    </div>
  );
};