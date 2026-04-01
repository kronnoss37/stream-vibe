import getIdFromTitle from '@/utils/getIdFromTitle'

const getTabsElementsIdsFromTitle = (
  title: string,
): { buttonId: string; contentId: string } => {
  const titleFormatted = getIdFromTitle(title)

  return {
    buttonId: `${titleFormatted}-tab`,
    contentId: `${titleFormatted}-tabpanel`,
  }
}

export default getTabsElementsIdsFromTitle
