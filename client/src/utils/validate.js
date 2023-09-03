export default function Validate(obj) {
    const { name, difficult, duration, season, country } = obj;
    let hour = parseInt(duration.slice(0,2))
    let minutes = parseInt(duration.slice(3,5))

    let errors = {}
    if (!name) {
        return errors = {...errors, name: 'name cannot be null'}
    } else if (name.length < 10 || name.length > 30) return errors = {...errors, name: 'name must have at least 10 characters and 30 maximum'}


    if (difficult === 0) {
        return errors = {...errors, difficult: 'difficult must be a number between 0 and 5'}
    }
    if (hour > 10) return errors = {...errors, duration: 'must be less than 10 hours'}
    if (minutes < 15 && hour === 0) return errors = {...errors, duration: 'must be greater than 15 minutes'}

    if (!season) return errors = {...errors, season: 'season cannot be null'}

    if (country.length === 0) return errors = {...errors, country: 'select at least one country'}
    if (country.length > 20) return errors = {...errors, country: '20 countries max' }
    return errors
}