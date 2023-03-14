const Error = ({ message, errorStyle }) => {
    if (message === null) {
        return null
    }

    const styles = {
        success: {
            color: 'green',
            fontStyle: 'italic',
            fontSize: 24
        },
        error: {
            color: 'red',
            fontSize: 24
        }

    }

    return (
        <div style={styles[errorStyle]}>
            {message}
        </div>
    )
}

export default Error