class Stars {
  image: string
  name: string
  description: string
  distance: string
  travelTime: string
  id: number

  constructor(
    image: string,
    name: string,
    description: string,
    distance: string,
    travelTime: string,
    id: number
  ) {
    this.image = image
    this.name = name
    this.description = description
    this.distance = distance
    this.travelTime = travelTime
    this.id = id
  }
}

export default Stars
