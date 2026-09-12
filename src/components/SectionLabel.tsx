/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface SectionLabelProps {
  label: string;
}

export default function SectionLabel({ label }: SectionLabelProps) {
  return (
    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-500 inline-block">
      {label}
    </span>
  );
}
