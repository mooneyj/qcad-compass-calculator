import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { ArrowLeftRight, RotateCcw, Navigation, Compass } from 'lucide-react'
import './App.css'

function App() {
  const [qcadAngle, setQcadAngle] = useState('')
  const [compassAngle, setCompassAngle] = useState('')
  const [lastModified, setLastModified] = useState('qcad')

  // Conversion functions
  const qcadToCompass = (qcadValue) => {
    const qcad = parseFloat(qcadValue)
    if (isNaN(qcad)) return ''
    let compass = (90 - qcad) % 360
    if (compass < 0) compass += 360
    return compass.toFixed(2)
  }

  const compassToQcad = (compassValue) => {
    const compass = parseFloat(compassValue)
    if (isNaN(compass)) return ''
    let qcad = (90 - compass) % 360
    if (qcad < 0) qcad += 360
    return qcad.toFixed(2)
  }

  // Handle QCAD input change
  const handleQcadChange = (value) => {
    setQcadAngle(value)
    setLastModified('qcad')
    if (value === '') {
      setCompassAngle('')
    } else {
      const converted = qcadToCompass(value)
      setCompassAngle(converted)
    }
  }

  // Handle Compass input change
  const handleCompassChange = (value) => {
    setCompassAngle(value)
    setLastModified('compass')
    if (value === '') {
      setQcadAngle('')
    } else {
      const converted = compassToQcad(value)
      setQcadAngle(converted)
    }
  }

  // Clear all inputs
  const clearAll = () => {
    setQcadAngle('')
    setCompassAngle('')
  }

  // Swap values
  const swapValues = () => {
    const tempQcad = qcadAngle
    const tempCompass = compassAngle
    setQcadAngle(tempCompass)
    setCompassAngle(tempQcad)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            QCAD ↔ Compass Angle Calculator
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Convert between QCAD angles (0° = East, counterclockwise) and compass bearings (0° = North, clockwise) 
            for architectural and site planning applications.
          </p>
        </div>

        {/* Main Calculator */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* QCAD Angle Card */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <RotateCcw className="w-5 h-5" />
                QCAD Angle
              </CardTitle>
              <CardDescription className="text-blue-100">
                0° = East (→), increases counterclockwise
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="qcad-input" className="text-sm font-medium text-gray-700">
                    Angle (degrees)
                  </Label>
                  <Input
                    id="qcad-input"
                    type="number"
                    step="0.01"
                    placeholder="Enter QCAD angle..."
                    value={qcadAngle}
                    onChange={(e) => handleQcadChange(e.target.value)}
                    className="mt-1 text-lg"
                  />
                </div>
                <div className="text-sm text-gray-500 space-y-1">
                  <div>• 0° = East (horizontal right)</div>
                  <div>• 90° = North (vertical up)</div>
                  <div>• 180° = West (horizontal left)</div>
                  <div>• 270° = South (vertical down)</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Compass Angle Card */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Compass className="w-5 h-5" />
                Compass Bearing
              </CardTitle>
              <CardDescription className="text-green-100">
                0° = North (↑), increases clockwise
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="compass-input" className="text-sm font-medium text-gray-700">
                    Bearing (degrees)
                  </Label>
                  <Input
                    id="compass-input"
                    type="number"
                    step="0.01"
                    placeholder="Enter compass bearing..."
                    value={compassAngle}
                    onChange={(e) => handleCompassChange(e.target.value)}
                    className="mt-1 text-lg"
                  />
                </div>
                <div className="text-sm text-gray-500 space-y-1">
                  <div>• 0° = North</div>
                  <div>• 90° = East</div>
                  <div>• 180° = South</div>
                  <div>• 270° = West</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Control Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <Button 
            onClick={swapValues} 
            variant="outline" 
            className="flex items-center gap-2 hover:bg-blue-50"
            disabled={!qcadAngle && !compassAngle}
          >
            <ArrowLeftRight className="w-4 h-4" />
            Swap Values
          </Button>
          <Button 
            onClick={clearAll} 
            variant="outline" 
            className="flex items-center gap-2 hover:bg-red-50"
            disabled={!qcadAngle && !compassAngle}
          >
            Clear All
          </Button>
        </div>

        {/* Conversion Formula Info */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Conversion Formulas</CardTitle>
            <CardDescription>
              Mathematical relationships between the two angle systems
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">QCAD → Compass</h3>
                <code className="text-sm bg-white px-2 py-1 rounded border">
                  Compass = (90 - QCAD) mod 360
                </code>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Compass → QCAD</h3>
                <code className="text-sm bg-white px-2 py-1 rounded border">
                  QCAD = (90 - Compass) mod 360
                </code>
              </div>
            </div>
            <div className="text-sm text-gray-600 mt-4">
              <p><strong>Note:</strong> Both systems use 0-360° range. Negative results are normalized by adding 360°.</p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Built for architectural and site planning professionals using QCAD</p>
        </div>
      </div>
    </div>
  )
}

export default App

