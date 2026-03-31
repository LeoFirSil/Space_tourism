class Rockets {
  imageMob: string
  image: string
  title: string
  description: string
  id: number

  constructor(
    imageMob: string,
    image: string,
    title: string,
    description: string,
    id: number
  ) {
    this.imageMob = imageMob
    this.image = image
    this.title = title
    this.description = description
    this.id = id
  }
}

export default Rockets
