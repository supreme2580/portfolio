export default interface Exp {
    _id: string,
    title: string,
    name: string,
    image: {
        asset: {
            _ref: string
        }
    },
    techStack: [
        {
            asset: {
                _ref: string
            }
        }
    ],
    startDate: string,
    endDate: string
}