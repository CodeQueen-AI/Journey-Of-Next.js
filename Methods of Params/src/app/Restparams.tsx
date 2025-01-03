export default function Home() {
    const showNames = (...names: string[]): string => `Names are: ${names.join(", ")}`;

    return (
        <div>
            <h1>{showNames("Code Queen", "Anusha", "Ali")}</h1> {/* Output: Names are: Code Queen, Anusha, Ali */}
        </div>
    );
}

//Explanation : ...names allows passing multiple values as an array