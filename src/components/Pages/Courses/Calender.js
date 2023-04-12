import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const calender = () => {
    return (
        <div class="border border-gray-300 px-10 py-6 rounded-lg">
            <div class="flex flex-row gap-3">
                <p> January 2023</p>
                <div class="flex flex-row">
                    <FontAwesomeIcon icon={faChevronLeft} class="h-4 w-4 text-[#F64F59] text-sm " />
                    <FontAwesomeIcon icon={faChevronRight} class="h-4 w-4 text-[#F64F59] text-sm" />
                </div>

            </div>
            <div class="grid grid-cols-7 gap-2 text-sm">
                <p>Mon</p>
                <p>Tue</p>
                <p>Wed</p>
                <p>Thu</p>
                <p>Fri</p>
                <p>Sat</p>
                <p>Sun</p>
            </div>
            <div class="grid grid-cols-7 gap-5 text-sm">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
                <p>12</p>
                <p>13</p>
                <p>14</p>
                <p>15</p>
                <p>16</p>
                <p>17</p>
                <p>18</p>
                <p>19</p>
                <p>20</p>
                <p>21</p>
                <p>22</p>
                <p>23</p>
                <p>24</p>
                <p>25</p>
                <p>26</p>
                <p>27</p>
                <p>28</p>
                <p>29</p>
                <p>30</p>
                <p>31</p>
            </div>

        </div>


    );
}

export default calender