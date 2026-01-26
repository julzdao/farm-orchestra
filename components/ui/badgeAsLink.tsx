import { Badge } from "@/components/ui/badge"
import { ArrowUpRightIcon } from "lucide-react"
import { FunctionComponent, JSX } from "react"

/**
 * A custom badge component that links to a specific URL.
 *
 * @param {string} text The text to display inside the badge.
 * @param {string} link The URL to link to when the badge is clicked.
 */
interface BadgeLinkProps {
    /**
   * The text to display inside the badge.
   */
    text: string, 
    /**
   * The URL to link to when the badge is clicked.
   */
    link: string
}

/**
 * A custom badge component that links to a specific URL.
 *
 * This component wraps a `Badge` component with an `<a>` element, allowing users
 * to click on the badge and be redirected to the specified URL.
 *
 * @param {BadgeLinkProps} props The props for the BadgeAsLink component.
 */
export const BadgeAsLink: FunctionComponent<BadgeLinkProps> = ({text, link}) => {
  return (
    <Badge asChild>
      <a href={link}>
        {text} <ArrowUpRightIcon data-icon="inline-end" />
      </a>
    </Badge>
  )
}
