declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

// declare module "*.svg" {
//   const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
//   export default content;
// }

declare module "*.svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module "*.png" {
  const value: string;
  export default value;
}
