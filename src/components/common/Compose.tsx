// Package dependencies.
import { createElement, PropsWithChildren, ReactNode } from "react";

interface ComposeProps {
  children?: ReactNode;
  components?: ((props: PropsWithChildren<unknown>) => JSX.Element)[];
}

// Export Compose as the default component.
export default Compose;

/**
 * A higher order function component which composes multiple components into a
 * single component. The first element in components array will become the
 * parent of the next.
 */
function Compose({ components = [], children }: ComposeProps): JSX.Element {
  return components.reduceRight(
    (
      children: JSX.Element,
      Component: (props: PropsWithChildren<unknown>) => JSX.Element
    ): JSX.Element => createElement(Component, undefined, children),
    <>{children}</>
  );
}
