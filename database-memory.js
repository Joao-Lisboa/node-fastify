// import { randomUUID } from 'node:crypto'

// export class DatabaseMemory {
//     // register(video) {
//     //     this.#videos.set(video.id, video)
//     // }

//     // update(id, video) {
//     //     this.#videos.set(id, video)
//     // }

//     #videos = new Map()

//     list(search) {
//         return Array.from(this.#videos.entries()).map(([id, video]) => {
//             return {
//                 id,
//                 ...video
//             }
//         })
//         .filter(video => {
//             if (search) {
//                 return video.title.includes(search)
//             }
//             return true
//         })
//     }

//     create(video) {
//         const videoId = randomUUID()
//         this.#videos.set(videoId, video)
//     }

//     update(id, video) {
//         this.#videos.set(id, video)
//         return this.#videos.get(id)
//     }

//     delete(id) {
//         this.#videos.delete(id)
//     }
    
// }

