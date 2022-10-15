import { Movie } from "../Domain/Movie"

export function createMockMovie() {
    return new Movie({
        title: "Test Movie",
        genres: [
            "Action",
            "Adventure"
        ],
        year: "2022",
        synopsis: "lorem ipsum dolor amet"
    })
}