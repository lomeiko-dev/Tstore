import React, {useCallback, useState} from "react";
import style from './FormSearchedUsers.module.scss';

import {Field, styledField} from "shared/ui/field";
import {Button, typedButton} from "shared/ui/button";
import {updateSortQuery, usersReset} from "entities/user";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";

export const FormSearchedUser = () => {
    const dispatch = useAppDispatch();
    const [search, setSearch] = useState("");

    const updateSearchField = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const toggleSearched = useCallback(() => {
        dispatch(usersReset());
        dispatch(updateSortQuery(`nickname_like=${search}&`))
    }, [search, dispatch]);

    const resetSearched = useCallback(() => {
        dispatch(usersReset());
        setSearch("");
    }, [dispatch, setSearch])

    return (
        <div className={style.form}>
            <Field
                styled={styledField.FILLED}
                value={search} onChange={updateSearchField}
                className={style.field} type="search" placeholder="имя..."/>

            <Button
                onClick={toggleSearched}
                typed={typedButton.SUBMIT}>найти</Button>
            <Button
                onClick={resetSearched}
                typed={typedButton.BACK}>сброс</Button>
        </div>
    );
};