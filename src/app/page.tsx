import React from "react";
import {redirect} from "next/navigation";

export default ({children}: any) => {
  redirect('/library');
}