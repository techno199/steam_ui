'use client'
import React from "react";
import {observer} from "mobx-react";
import {redirect} from "next/navigation";

export default observer(() => {
  redirect('/library');

  return (
    <div>

    </div>
  )
})
