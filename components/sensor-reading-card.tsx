import { Icon } from "@tabler/icons-react"
import { CircleSmall } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle, SensorValueType } from "./ui/card"
import React from "react"

interface SensorReadingCardProps {
  title: string
  value: string | number
  unit: string
  isActive: boolean
}

const STATUS_COLOR = {
  active: '#94F79E',
  inactive: '#f19181',
}

export const SensorReadingCard = React.memo(function SensorReadingCard({
  title,
  value,
  unit,
  isActive,
}: SensorReadingCardProps) {
  return (
    <Card >
        <CardHeader>
          <CardDescription>
            <h3>{title}</h3>
             <CircleSmall color={isActive ? STATUS_COLOR.active : STATUS_COLOR.inactive} strokeWidth={11} size={22} />
          </CardDescription>
          <CardTitle>
            <h1>{value}</h1>
            <SensorValueType>{unit}</SensorValueType>
          </CardTitle>
        </CardHeader>
      </Card>
  )
})
