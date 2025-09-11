import { cn, formatDateTime } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
  date: string;
}

const FormattedDateTime: React.FC<Props> = ({ className, date }) => {
  return (
    <div className={cn("body-1 text-lime-200", className)}>
      {formatDateTime(date)}
    </div>
  );
};

export default FormattedDateTime;
