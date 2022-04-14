import { FC, ReactNode } from "react"

import { Box, BreadcrumbLink as Link, Flex, NAMED_COLORS, useColorModeValue } from "@ironfish/ui-kit"
import RoutePaths from "constants/RoutePaths"
import HomeIcon from "icons/HomeIcon"
import BlockIcon from "icons/BlockIcon"

interface BaseBreadcrumbLinkProps {
  icon: ReactNode
  label: ReactNode
  isCurrent?: boolean
  to?: string
}

const BaseBreadcrumbLink: FC<BaseBreadcrumbLinkProps> = ({
  icon,
  label,
  isCurrent = false,
  to = '#'
}) => {
  const currentColor = useColorModeValue(
    {
      icon: NAMED_COLORS.LIGHT_GREY,
      text: NAMED_COLORS.GREY
    },
    {
      icon: NAMED_COLORS.PALE_GREY,
      text: NAMED_COLORS.PALE_GREY
    }
  )

  return (
    <Link href={to} isCurrentPage={isCurrent}>
      <Flex alignItems="center">
        <Box mr="0.75rem" pb="0.4rem" color={isCurrent ? currentColor.icon : NAMED_COLORS.LIGHT_BLUE}>
          {icon}
        </Box>
        <Box color={isCurrent ? currentColor.text : NAMED_COLORS.LIGHT_BLUE}>
          <h5>{label}</h5>
        </Box>
      </Flex>
    </Link>
  )
}

const Home: FC<Pick<BaseBreadcrumbLinkProps, 'isCurrent'>> = ({ isCurrent }) => (
  <BaseBreadcrumbLink
    to={RoutePaths.Home}
    icon={<HomeIcon h="1.25rem" w="1.25rem" color="inherit"/>}
    label="Home"
    isCurrent={isCurrent}
  />
)

const Explorer: FC<Pick<BaseBreadcrumbLinkProps, 'isCurrent'>> = ({ isCurrent = false }) => (
  <BaseBreadcrumbLink
    to={RoutePaths.Explorer}
    icon={<BlockIcon h="1.25rem" w="1.25rem" color="inherit"/>}
    label="All Blocks"
    isCurrent={isCurrent}
  />
)

interface BreadcrumbLinkProps {
  Home: FC<Pick<BaseBreadcrumbLinkProps, 'isCurrent'>>
  Explorer: FC<Pick<BaseBreadcrumbLinkProps, 'isCurrent'>>
}

const BreadcrumbLink: FC<BaseBreadcrumbLinkProps> & BreadcrumbLinkProps = (props) => (<BaseBreadcrumbLink {...props} />)

BreadcrumbLink.Home = Home
BreadcrumbLink.Explorer = Explorer

export default BreadcrumbLink