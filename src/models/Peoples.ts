class Peoples {
  image: string
  name: string
  description: string
  title: string
  id: number

  constructor(
    image: string,
    name: string,
    description: string,
    title: string,
    id: number
  ) {
    this.image = image
    this.name = name
    this.description = description
    this.title = title
    this.id = id
  }
}

export default Peoples
