//==> ahain apdated

// import { motion } from "framer-motion";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// import { scaleLinear } from "d3-scale";

// // Use the simplified GeoJSON file URL
// const geoUrl = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

// const MapComponent = () => {
//   const colorScale = scaleLinear()
//     .domain([0, 50]) // Example data range (like population, GDP, etc.)
//     .range(["#E0F7FA", "#00796B"]); // Color scale for the map

//   return (
//     <motion.div
//       className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.4 }}
//     >
//       <h2 className="text-lg font-medium mb-4 text-gray-100">World Map</h2>

//       {/* Make map container responsive */}
//       <div className="h-180 w-full sm:h-96 md:h-[500px] lg:h-[600px]">
//         <ComposableMap projectionConfig={{ scale: 120 }} width="100%" height="100%">
//           <Geographies geography={geoUrl}>
//             {({ geographies, loaded, error }) => {
//               // Handle loading and error states
//               if (error) {
//                 return <div className="text-red-500">Error loading the map data: {error.message}</div>;
//               }

//               // Loading state
//               if (!loaded) {
//                 return <div className="text-yellow-500">Loading map data...</div>;
//               }

//               // Log geographies to check data
//               console.log(geographies);

//               // Ensure there are geographies to map
//               if (!geographies || geographies.length === 0) {
//                 return <div className="text-red-500">No map data available.</div>;
//               }

//               return geographies.map((geo) => {
//                 const { NAME } = geo.properties;
//                 const countryData = Math.random() * 100; // Random for demo data
                
//                 // Coordinates for positioning country name (centroid)
//                 const [longitude, latitude] = geo.properties.centroid;

//                 return (
//                   <g key={NAME}>
//                     <Geography
//                       geography={geo}
//                       fill={colorScale(countryData)}
//                       stroke="#FFFFFF"
//                       strokeWidth={0.5}
//                       style={{
//                         hover: { fill: "#00796B", outline: "none" },
//                       }}
//                     />
//                     {/* Display country name */}
//                     <text
//                       x={longitude}
//                       y={latitude}
//                       textAnchor="middle"
//                       alignmentBaseline="middle"
//                       style={{
//                         fontSize: "10px", // Adjust font size as needed
//                         fill: "#ffffff",
//                         pointerEvents: "none", // Prevent interaction with text
//                       }}
//                     >
//                       {NAME}
//                     </text>
//                   </g>
//                 );
//               });
//             }}
//           </Geographies>
//         </ComposableMap>
//       </div>
//     </motion.div>
//   );
// };

// export default MapComponent;



//==>  not working

// import { motion } from "framer-motion";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// import { scaleLinear } from "d3-scale";

// // Use the simplified GeoJSON file URL
// const geoUrl = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

// const MapComponent = () => {
//   const colorScale = scaleLinear()
//     .domain([0, 50]) // Example data range (like population, GDP, etc.)
//     .range(["#E0F7FA", "#00796B"]); // Color scale for the map

//   return (
//     <motion.div
//       className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.4 }}
//     >
//       <h2 className="text-lg font-medium mb-4 text-gray-100">World Map</h2>

//       {/* Make map container responsive */}
//       <div className="h-180 w-full sm:h-96 md:h-[500px] lg:h-[600px]">
//         <ComposableMap projectionConfig={{ scale: 120 }} width="100%" height="100%">
//           <Geographies geography={geoUrl}>
//             {({ geographies }) =>
//               geographies.map((geo) => {
//                 const { NAME, LAT, LON } = geo.properties;
//                 // Example data: Replace with actual data for visualization
//                 const countryData = Math.random() * 100; // Random for demo
                
//                 // Coordinates for positioning country name (can be adjusted further)
//                 const [longitude, latitude] = geo.properties.centroid;

//                 return (
//                   <g key={NAME}>
//                     <Geography
//                       geography={geo}
//                       fill={colorScale(countryData)}
//                       stroke="#FFFFFF"
//                       strokeWidth={0.5}
//                       style={{
//                         hover: { fill: "#00796B", outline: "none" },
//                       }}
//                     />
//                     {/* Display country name */}
//                     <text
//                       x={longitude}
//                       y={latitude}
//                       textAnchor="middle"
//                       alignmentBaseline="middle"
//                       style={{
//                         fontSize: "10px", // Adjust font size as needed
//                         fill: "#ffffff",
//                         pointerEvents: "none", // Prevent interaction with text
//                       }}
//                     >
//                       {NAME}
//                     </text>
//                   </g>
//                 );
//               })
//             }
//           </Geographies>
//         </ComposableMap>
//       </div>
//     </motion.div>
//   );
// };

// export default MapComponent;



//===> new code working with alignment 

import { motion } from "framer-motion";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleLinear } from "d3-scale";

// Use the simplified GeoJSON file URL
const geoUrl = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

const MapComponent = () => {
  const colorScale = scaleLinear()
    .domain([0, 50]) // Example data range (like population, GDP, etc.)
    .range(["#E0F7FA", "#00796B"]); // Color scale for the map

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">World Map</h2>

      {/* Make map container responsive */}
        <div className="h-180 w-full sm:h-96 md:h-[500px] lg:h-[600px]">
        <ComposableMap projectionConfig={{ scale: 120 }} width={800} height={500}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const { NAME } = geo.properties;
                // Example data: Replace with actual data for visualization
                const countryData = Math.random() * 100; // Random for demo
                return (
                  <Geography
                    key={NAME}
                    geography={geo}
                    fill={colorScale(countryData)}
                    stroke="#FFFFFF"
                    strokeWidth={0.5}
                    style={{
                      hover: { fill: "#00796B", outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
    </motion.div>
  );
};

export default MapComponent;



//====> working code but not aligned 
// import { motion } from "framer-motion";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// import { scaleLinear } from "d3-scale";

// // Use the simplified GeoJSON file URL
// const geoUrl = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

// const MapComponent = () => {
//   const colorScale = scaleLinear()
//     .domain([0, 50]) // Example data range (like population, GDP, etc.)
//     .range(["#E0F7FA", "#00796B"]); // Color scale for the map

//   return (
//     <motion.div
//       className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.4 }}
//     >
//       <h2 className="text-lg font-medium mb-4 text-gray-100">World Map</h2>

//       <div className="h-80 w-full">
//         <ComposableMap projectionConfig={{ scale: 120 }} width={800} height={500}>
//       {/* <div className="h-80 w-full sm:h-96 md:h-[500px] lg:h-[600px]"> */}
//         {/* <ComposableMap projectionConfig={{ scale: 120 }} width="100%" height="100%"> */}
//           <Geographies geography={geoUrl}>
//             {({ geographies }) =>
//               geographies.map((geo) => {
//                 const { NAME } = geo.properties;
//                 // Example data: Replace with actual data for visualization
//                 const countryData = Math.random() * 100; // Random for demo
//                 return (
//                   <Geography
//                     key={NAME}
//                     geography={geo}
//                     fill={colorScale(countryData)}
//                     stroke="#FFFFFF"
//                     strokeWidth={0.5}
//                     style={{
//                       hover: { fill: "#00796B", outline: "none" },
//                     }}
//                   />
//                 );
//               })
//             }
//           </Geographies>
//         </ComposableMap>
//       </div>
//     </motion.div>
//   );
// };

// export default MapComponent;




// import { motion } from "framer-motion";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// import { scaleLinear } from "d3-scale";

// // const geoUrl = "https://raw.githubusercontent.com/d3/d3-geo/master/test/data/world-110m.json";
// const geoUrl = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

// const MapComponent = () => {
//   const colorScale = scaleLinear()
//     .domain([0, 50]) // Map value range (for example, population, GDP, etc.)
//     .range(["#E0F7FA", "#00796B"]); // Color range for the map

//   return (
//     <motion.div
//       className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.4 }}
//     >
//       <h2 className="text-lg font-medium mb-4 text-gray-100">World Map</h2>

//       <div className="h-80">
//         {/* <ComposableMap projectionConfig={{ scale: 120 }}> */}
//         <ComposableMap projectionConfig={{ scale: 120 }}width={800} height={500}>
//           <Geographies geography={geoUrl}>
//             {({ geographies }) =>
//               geographies.map((geo) => {
//                 const { NAME } = geo.properties;
//                 // Example data: You can replace this with actual data
//                 const countryData = Math.random() * 100; // Replace with real data (e.g., GDP, population)
//                 return (
//                   <Geography
//                     key={NAME}
//                     geography={geo}
//                     fill={colorScale(countryData)}
//                     stroke="#FFFFFF"
//                     strokeWidth={0.5}
//                     style={{
//                       hover: { fill: "#00796B", outline: "none" },
//                     }}
//                   />
//                 );
//               })
//             }
//           </Geographies>
//         </ComposableMap>
//       </div>
//     </motion.div>
//   );
// };

// export default MapComponent;




// import React from 'react'

// function MapComponent() {
//   return (
//     <div>
//       MapComponent
//     </div>
//   )
// }

// export default MapComponent
