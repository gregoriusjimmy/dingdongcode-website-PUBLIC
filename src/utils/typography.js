import Typography from "typography"
import grandViewTheme from "typography-theme-grand-view"
import funstonTheme from "typography-theme-funston"
const typography = new Typography(grandViewTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
