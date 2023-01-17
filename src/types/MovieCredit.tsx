import type { Cast } from "./Cast"
import type { Crew } from "./Crew"

export type MovieCredit = {
    id: string,
    cast: Cast[],
    crew: Crew[]
}