export default {
    name: "experience",
    title: "Experience",
    type: "document",
    fields: [
        {
            name: "image",
            title: "Image",
            type: "image"
        },
        {
            name: "title",
            title: "Job Title",
            type: "string"
        },
        {
            name: "name",
            title: "Job Name",
            type: "string"
        },
        {
            name: "techStack",
            title: "Tech Stack",
            type: "array",
            of: [
                {
                    type: "image",
                }
            ]
        },
        {
            name: "startDate",
            title: "Start Date",
            type: "date"
        },
        {
            name: "endDate",
            title: "End Date",
            type: "date"
        }
    ]
}