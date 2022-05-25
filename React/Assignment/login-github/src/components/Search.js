import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

//The goal is to create a simple web application which makes a request to an API, parses the response, and displays the result in the UI. The app will consist of two major components - one search component and one results component.
// - Text input with 'Login' type=text for entering a String value
// - 'Submit' Button for initiating a request to `https://api.github.com/search/users?q={login} in:login`, where {login} is the input value
// - Results should be displayed in a table with the following columns: avatar_url, login, type
// - Results should not be more than 9
// - Use Pagination, with 9 items displayed Per_Page


/**
 * Total registos (total_count) 39556
 * total por pagina 9
 * Total de paginas: 12356/9 = 4395
 * pagina ativa: 1
 */



export default function Search() {
    const [page, setPage] = useState(0);
    const [selectPage, setSelectPage] = useState(0)
    const [perPage, setPerPage] = useState(9);
    const [totalPages, setTotalPages] = useState(0)
    const [totalRecords, setTotalRecords] = useState(0);
    const [login, setLogin] = useState("");
    const [users, setUsers] = useState([]);

    const handleClick = () => {
        console.log('DEBUG click')
        setPage(-1)
    }
    useEffect(() => {
        console.log('DEBUG effect')
        if (login) {
            fetch(`https://api.github.com/search/users?q=${login}&in:login&per_page=${perPage}&page=${page}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const total = Math.ceil(data.total_count / perPage)
                    console.log(total)
                    setTotalPages(total)
                    setTotalRecords(data.total_count);
                    setUsers(data.items);
                });
        }
    }, [page, perPage]);

    const generatePagination = () => {
        const elem = []
        for (let x = 0; x < totalPages; x++) {
            elem.push(<option key={x} value={x}>{x + 1}</option>)
        }
        console.log(elem)
        return elem
    }

    const handlePageChange = (e) => {
        setSelectPage(e.currentTarget.value)
        setPage(e.currentTarget.value);
    };

    const handlePerPageChange = (perPage) => {
        setPerPage(perPage);
    };

    const handleLoginChange = (event) => {
        setLogin(event.target.value);
    };

    const handleFirst = () => {
        setPage(0)
    }
    const handlePrevious = () => {
        if (page > 0) {
            setPage(page - 1)
        }
    }
    const handleNext = () => {
        if (page < totalPages) {
            setPage(page + 1)
        }
    }
    const handleLast = () => {
        setPage(totalPages)
    }


    return (
        <div>
            <input type="text" value={login} onChange={handleLoginChange} />
            <button onClick={() => handleClick()}>Search</button>
            {/* <Pagination
                page={page}
                perPage={perPage}
                total={total}
                onPageChange={handlePageChange}
                onPerPageChange={handlePerPageChange}
            /> */}

            {page}
            <div>
                <button onClick={handleFirst} >{"<<"}</button>
                <button onClick={handlePrevious} >{"<"}</button>

                <select value={selectPage} onChange={handlePageChange}>
                    {generatePagination()}
                </select>

                <button onClick={handleNext} >{">"}</button>
                <button onClick={handleLast}>{">>"}</button>
            </div>

            <div className="container">

            </div>
        </div>
    );
}

/*
/*
                <table>
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>Login</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <div className="container-sm">
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td className="imagem"><img src={user.avatar_url} alt={user.login} /></td>
                                    <td>{user.login}</td>
                                    <td>{user.type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </div>
                </table>


*/