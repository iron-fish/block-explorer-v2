import Head from 'next/head'
import { useRouter } from 'next/router'
import { Box } from '@ironfish/ui-kit'

import unless from 'ramda/src/unless'
import equals from 'ramda/src/equals'
import pipe from 'ramda/src/pipe'

import { TimeStamp } from 'components'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'
import {
  DifficultyIcon,
  BlockInfoHeightIcon,
  BlockInfoSizeIcon,
  BlockInfoDifficultyIcon,
  BlockInfoTxnIcon,
  BlockInfoTimestampIcon,
  BlockInfoGraffitiIcon,
} from 'svgx'
import { truncateHash } from 'utils/hash'
import safeProp from 'utils/safeProp'
import { BlockType } from 'types'
import { useTranslation } from 'hooks/useTranslation'
import BlockInfo from 'components/BlockInfo'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const BLOCK_CARDS = [
  {
    key: 'height-card',
    label: 'Height',
    value: safeProp('sequence'),
    icon: <BlockInfoHeightIcon height={47} width={47} />,
  },
  {
    key: 'hash-card',
    label: 'Block hash',
    value: pipe(
      safeProp('hash'),
      unless(equals(''), hash => truncateHash(hash, 2, 4))
    ),
    icon: <DifficultyIcon />,
  },
  {
    key: 'size-card',
    label: 'Size',
    value: pipe(safeProp('size'), size, z => z.toString()),
    icon: <BlockInfoSizeIcon />,
  },
  {
    key: 'difficulty-card',
    label: 'Difficulty',
    value: safeProp('difficulty'),
    icon: <BlockInfoDifficultyIcon />,
  },
  {
    key: 'txn-card',
    label: 'Transactions Count',
    value: safeProp('transactions_count'),
    icon: <BlockInfoTxnIcon />,
  },
  {
    key: 'timestamp-card',
    label: 'Timestamp',
    value: (block: BlockType) => (
      <TimeStamp timestamp={safeProp('timestamp')(block)} />
    ),
    icon: <BlockInfoTimestampIcon />,
  },
  {
    key: 'graffiti-card',
    label: 'Graffiti',
    value: safeProp('graffiti'),
    icon: <BlockInfoGraffitiIcon />,
  },
]

export default function BlockInformationPage() {
  const router = useRouter()
  const { t } = useTranslation('p-block-id')
  const { id } = router.query

  return (
    <main style={{ width: '100%', height: '100%' }}>
      <Head>
        <title>
          {t('info-title')}
          {id}
        </title>
      </Head>
      <Box mx={{ base: '2rem', lg: '15%' }} mb="6rem" zIndex={1}>
        <Box mt="2.5rem">
          <Breadcrumbs />
        </Box>
        <BlockInfo id={id} />
      </Box>
    </main>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  }
}

// TODO: Revisit this:
// Not certain this is how we want to do things but I wasn't able to support a purely
// client side translation setup
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
