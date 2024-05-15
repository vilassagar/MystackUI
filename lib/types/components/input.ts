import type { ReactNode } from "react";
import PropTypes from "prop-types";

// generic types
import type { colors } from "../generic";
import { propTypesColors } from "../generic";

/**
 * This file contains the types and prop-types for Input and Textarea components.
 */

// typescript types
export type variant = "standard" | "outlined" | "static";
export type size = "md" | "lg";
export type color = "black" | "white" | colors;
export type label = string;
export type error = boolean;
export type success = boolean;
export type icon = ReactNode;
export type resize = boolean;
export type labelProps = {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  [key: string]: any;
};
export type containerProps = {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  [key: string]: any;
};
export type shrink = boolean;
export type className = string;

// javascript prop-types
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const propTypesVariant: any = ["standard", "outlined", "static"];
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const propTypesSize: any = ["md", "lg"];
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const propTypesColor: any = ["black", "white", ...propTypesColors];
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const propTypesLabel: any = PropTypes.string;
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const propTypesError: any = PropTypes.bool;
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const propTypesSuccess: any = PropTypes.bool;
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const propTypesIcon: any = PropTypes.node;
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const propTypesResize: any = PropTypes.bool;
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const propTypesLabelProps: any = PropTypes.instanceOf(Object);
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const propTypesContainerProps: any = PropTypes.instanceOf(Object);
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const propTypesShrink: any = PropTypes.bool;
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const propTypesClassName: any = PropTypes.string;