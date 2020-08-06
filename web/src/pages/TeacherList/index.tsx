import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis." >
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>
                   
                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/1580570?s=460&u=adfc1f4126ed70bb776bfb6158b60afe69612f4d&v=4" alt="Cezar Lamann"/>
                        <div>
                            <strong>Cezar Lamann</strong>
                            <span>Programação ninja</span>
                        </div>
                    </header>
                </article>
            </main>
        </div>
    )
}

export default TeacherList;
