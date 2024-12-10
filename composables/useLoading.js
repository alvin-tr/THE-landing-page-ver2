export const useLoading = () => {
    const isLoading = ref(false)

    const startLoading = async asyncFn => {
        try {
            isLoading.value = true
            await asyncFn()
        } catch (error) {
            throw error
        } finally {
            isLoading.value = false
        }
    }

    return {
        isLoading,
        startLoading,
    }
}
