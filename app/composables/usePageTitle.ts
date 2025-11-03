export const usePageTitle = (title?: string) => {
  useHead({
    title: title ? `${title}` : 'My Portfolio inspired by Operating Systems'
  })
}
