import React from "react"
import { Button } from "./components/ui/button"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import CreateTrip from "./pages/CreateTrip"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/createtrip" element={<CreateTrip />}/>
    </Routes>
  )
}