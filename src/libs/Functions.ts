const Functions = {
  round: (min: number, max: number): number => {
    return Math.round(Math.random() * (max - min) + min)
  }
}

export default Functions
