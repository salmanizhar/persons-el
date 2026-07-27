import type { MetadataRoute } from "next";
export default function manifest():MetadataRoute.Manifest{return {name:"Perssons El",short_name:"Perssons El",description:"Elektriker i Helsingborg",start_url:"/",display:"standalone",background_color:"#f1f4f5",theme_color:"#123b56",lang:"sv-SE",icons:[{src:"/icon.png",sizes:"any",type:"image/png"}]}}
