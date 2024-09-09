/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import rgba from "./rgba";

/**
  The gradientChartLine() function helps you to create a gradient color for the chart line
 */

// Soft UI Dashboard React helper functions
// import rgba from "assets/theme/functions/rgba";

function gradientChartLine(
  chart: HTMLCanvasElement ,
  color: string,
  opacity: number = 0.2
): CanvasGradient | null {
  if (!chart) {
    console.error('El elemento canvas no existe');
    return null;
  }
  const ctx = chart.getContext("2d");
  if (!ctx) {
    console.error('No se pudo obtener el contexto 2D');
    return null;
  }

  const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  const primaryColor = rgba(color, opacity).toString();

  gradientStroke.addColorStop(1, primaryColor);
  gradientStroke.addColorStop(0.2, "rgba(72, 72, 176, 0.0)");
  gradientStroke.addColorStop(0, "rgba(203, 12, 159, 0)");

  return gradientStroke;
}

export default gradientChartLine;