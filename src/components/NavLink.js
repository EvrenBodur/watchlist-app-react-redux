import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export function NavLink({
  to,
  className,
  activeClassName,
  inactiveClassName,
  ...rest
}) {
  let location = useLocation();

  let isActive = location.pathname === to;
  let allClassNames =
    className + (isActive ? ` ${activeClassName}` : ` ${inactiveClassName}`);
  return <Link className={allClassNames} to={to} {...rest} />;
}
