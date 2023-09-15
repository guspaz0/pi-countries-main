export default function Validate(obj, activities, form) {
    const { name, difficult, duration, season, country } = obj;
    let hour = parseInt(duration.slice(0,2))
    let minutes = parseInt(duration.slice(3,5))

    let errors = {}
    if (!name) {
        errors = {...errors, name: 'name cannot be null'}
    } else if (name.length < 10 || name.length > 30) errors = {...errors, name: 'name must have at least 10 characters and 30 maximum'}
    if (activities.filter((s) => s.name === form.name).length > 0) errors = {...errors, name: 'Activity name already exists'}

    if (difficult === 0) {
        errors = {...errors, difficult: 'difficult must be a number between 0 and 5'}
    }
    if(duration === '') errors = {...errors, duration: 'cant be a blank spaces'}
    if (hour > 10) errors = {...errors, duration: 'must be less than 10 hours'}
    if (minutes < 15 && hour === 0) errors = {...errors, duration: 'must be greater than 15 minutes'}

    if (!season) errors = {...errors, season: 'select a season'}

    if (country.length === 0) errors = {...errors, country: 'select at least one country'}
    if (country.length > 20) errors = {...errors, country: '20 countries max' }
    return errors
}