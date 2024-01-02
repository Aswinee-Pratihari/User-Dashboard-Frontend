import React from "react";

const Loader = () => {
  const shimmerRows = [];

  for (let i = 0; i < 5; i++) {
    shimmerRows.push(
      <tr key={i} className="animate-pulse">
        <td className="border px-4 py-2">&nbsp;</td>
        <td className="border px-4 py-2">&nbsp;</td>
        <td className="border px-4 py-2">&nbsp;</td>
      </tr>
    );
  }

  return Loader;
};

export default Loader;
