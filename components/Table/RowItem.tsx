import { FC } from 'react'
import { Box, Flex, Th } from '@ironfish/ui-kit'

import { RowItemProps } from './types'

const RowItem: FC<RowItemProps> = ({ label = null, children, ...rest }) =>
  (label || children) && (
    <Flex direction="column" {...rest}>
      <Box as="table">
        {label && (
          <Box as="thead">
            <Box
              as="tr"
              boxShadow="unset !important"
              display={{ base: 'block', lg: 'none' }}
            >
              <Th p={{ base: '0 0 0.9375rem', lg: '0.9375rem 0' }}>{label}</Th>
            </Box>
          </Box>
        )}
        <Box as="tbody">
          <Box as="tr" boxShadow="unset !important">
            <Flex
              as="td"
              alignItems="center"
              minH="1.875rem"
              sx={{
                fontSize: '1rem',
                fontStyle: 'normal',
                lineHeight: '1.625rem',
                fontWeight: '400',
              }}
            >
              {children}
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  )

export default RowItem
