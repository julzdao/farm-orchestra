import { Badge } from "@/components/ui/badge"
import { ArrowUpRightIcon } from "lucide-react"
import { FunctionComponent, JSX } from "react"

interface BadgeLinkProps {
    text: string, 
    link: string
}

export const BadgeAsLink: FunctionComponent<BadgeLinkProps> = ({text, link}) => {
  return (
    <Badge asChild>
      <a href={link}>
        {text} <ArrowUpRightIcon data-icon="inline-end" />
      </a>
    </Badge>
  )
}
