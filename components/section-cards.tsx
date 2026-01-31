import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Temperature</CardDescription>
          <CardTitle className="text-5xl font-space-mono tabular-nums @[250px]/card:text-5xl">
            25°C
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
      </Card>
          <Card className="@container/card">
        <CardHeader>
          <CardDescription>Moisture</CardDescription>
          <CardTitle className="text-5xl font-space-mono tabular-nums @[250px]/card:text-5xl">
            25°C
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
      </Card>
          <Card className="@container/card">
        <CardHeader>
          <CardDescription>Air Humidity</CardDescription>
          <CardTitle className="text-5xl font-space-mono tabular-nums @[250px]/card:text-5xl">
            25°C
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
      </Card>
          <Card className="@container/card">
        <CardHeader>
          <CardDescription>Light Sensor</CardDescription>
          <CardTitle className="text-5xl font-space-mono tabular-nums @[250px]/card:text-5xl">
            25°C
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
      </Card>
    </div>
  )
}
