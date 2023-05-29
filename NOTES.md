# META DATA #
* To create static metadata, export it at the top of file after imports
    ```
    import { Metadata } from 'next'

    export const metadata: Metadata = {
    title: String,
    description: String,
    }
    ```
* To create dynamic metadata,
    ```
    export async function generateMetadata({ params: {userId}} : Params): Promise<Metadata> {
        const userData: Promise<User> = getUser(userId)
        const user: User = await userData
        if (!user.name) {
            return {
            title: "User Not Found"
            }
        }

        return {
            title: user.name,
            description: `This is the page for ${user.name}`
        }
    }
    ```




# FOR DATA FETCHING #
## Data fetching fundamentals: ##
`1.` Fetch data on the server using Server Components

`2.` Fetch data in parallel to minimise waterfalls and reduce loading times.

`3.` For layout and pages, fetch data where its used. Next.js will automatically deduplicate request in a tree.

`4.` Using Loading UI, Streaming and Suspense to progressively render a page and show a result to the user while the rest of the content loads.

## FOR FETCHING DATA `1` ##
 * Create a library `lib` function at the top parent directory and create `.tsx` fetch`(get)` functions to get data through an API
    > This allows for reusability of fetch functions and cleaner code
 * Create new file `types.d.ts` and put in data types(object) and what you want to call from the API
 * To call the data, import the fetch function and call it by
    ```
    import getAllUsers from '@/lib/getAllUsers'
    
    export default async function Users() {
        const userData: Promise<User[]> = getAllUsers()
        const users = await userData;

        return ...
    }
    ```
* `3` If you have to fetch the same data again in another function, you can safely recall the data and next.js will automatically redupe the request.
## FOR DYNAMIC ROUTES AND PARAMS ##
* When there is a dynamic route, the fetch function will need a template literal `${}` e.g.
    ```
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    ```
* Create new directory and name should be the param from the dynamic route, enclosed in square brackets `[]` e.g. [userId] 
    > Think of params as props
* `2` To fetch in parallel, call both fetch functions per usual e.g.
    ```
    const userData: Promise<User> = getUser(userId)
    const userPostsData: Promise<Post[]> = getUserPosts(userId)
    ```
    OLD APPROACH: to collect data for both, can await both in the same line e.g.
    ```
    const [user, userPost] = await Promise.all([userData, userPostData])
    ```

    NEW APPROACH: await for data when needed e.g.

    NOTE `4`: Wrap suspense around the function while it loads. This allows the user name to be shown while the post is loading
    ```
    const user = await userData
    if (!user.name) return notFound()

    return (
        <>
            <h2>{user.name}</h2>
            <br/>
            <Suspense fallback={<h2>Loading...</h2>}>
                {/* @ts-expect-error Server Component */}
                <UserPosts promise={userPostsData} />
            </Suspense>
        </>
    )
  ```
* When the server tries to render a page that doesn't exist, we can handle this by importing `import { notFound } from 'next/navigation'` and then returning `notFound()` if an error occurs. This will show the default 404 page, or you can create a `not-found.tsx` file at the same file level and customise it.

## CACHE SETTINGS FOR FETCH REQUEST ##

* We use an Incremental Static Regeneration `ISR` strategy to periodically check for updates to the data we are fetching. This is the best option between rendering data once and potentially displaying odd data `{cache: 'force-cache'}` (default), and constantly checking for updates `{cache: 'no-store'}`. This is done by using `{next: {revalidate: TIME}}` e.g.
    ```
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {next: {revalidate: 60}})
    ```
* You're able to set this on the `layout.tsx` or `page.tsx` level to revalidate everything instead on that per request basis. 
    ```
    export const revalidate = 60; //revalidates page every 60secs
    ```
## Turn SSR to SSG ##
* We can turn the server side rendered pages into the recommended, static site generated pages by generating the possible parameters beforehand
    ```
    export async function generateStaticParams() {
        const userData: Promise<User[]> = getAllUsers()
        const users = await userData

        return users.map(user => ({
            userId: user.id.toString()
        }))
    }
    ```
    * Note: since we are providing static params in advance, we need to make sure that they are strings; hence userId: user.id.`toString()` 
* Even though the pages are SSG, they will still revalidate the data if ISR is applied.
* To check if your build has SSR or SSG pages, you can run `npm run build`, to see if you have provided static props or not. 
* Note: ISR works for both SSG and SSR pages.

