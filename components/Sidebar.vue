<template>
    <div class="sidebar w-1/4">
        <div>
            <div class="bg-navy-blue text-white rounded font-semibold text-center">物件の条件</div>
            <div class="mb-5 border-l border-gray-400 py-1 pl-2 mt-3">
                <div>
                    <div class="mt-2">
                        <div class="ui slider checkbox">
                            <label class="text-sm font-semibold">賃　料</label>
                        </div>
                        <ul class="flex space-x-1">
                            <div class="ui slider checkbox py-1">
                                <select name="min" id="min_bill"
                                class="border border-solid border-gray-300 rounded p-1 text-sm">
                                    <option value="0">下限なし</option>
                                    <option value="1">3.0万円</option>
                                    <option value="2">3.5万円</option>
                                    <option value="3">4.0万円</option>
                                    <option value="4">4.5万円</option>
                                    <option value="5">5.0万円</option>
                                    <option value="6">5.5万円</option>
                                </select>
                            </div>
                            <span class="flex text-sm items-center justify-center">〜</span>
                            <div class="ui slider checkbox py-1">
                                <select name="max" id="max_bill"
                                class="border border-solid border-gray-300 rounded p-1 text-sm">
                                    <option value="0">上限なし</option>
                                    <option value="1">3.0万円</option>
                                    <option value="2">3.5万円</option>
                                    <option value="3">4.0万円</option>
                                    <option value="4">4.5万円</option>
                                    <option value="5">5.0万円</option>
                                    <option value="6">5.5万円</option>
                                </select>
                            </div>
                        </ul>
                    </div>
                    <div class="mt-3">
                        <div class="ui slider checkbox">
                            <label class="text-sm font-semibold">間取り</label>
                        </div>
                        <div class="flex flex-wrap text-left">
                            <div class="ui slider checkbox w-full">
                                <input type="checkbox" tabindex="0" checked>
                                <label class="text-sm">ワンルーム</label>
                            </div>
                            <div class="ui slider checkbox w-1/3">
                                <input type="checkbox" tabindex="0">
                                <label class="text-sm">1K</label>
                            </div>
                            <div class="ui slider checkbox w-1/3">
                                <input type="checkbox" tabindex="0">
                                <label class="text-sm">1DK</label>
                            </div>
                            <div class="ui slider checkbox w-1/3">
                                <input type="checkbox" tabindex="0">
                                <label class="text-sm">1LDK</label>
                            </div>
                            <div class="ui slider checkbox w-1/3">
                                <input type="checkbox" tabindex="0">
                                <label class="text-sm">2K</label>
                            </div>
                            <div class="ui slider checkbox w-1/3">
                                <input type="checkbox" tabindex="0">
                                <label class="text-sm">2DK</label>
                            </div>
                            <div class="ui slider checkbox w-1/3">
                                <input type="checkbox" tabindex="0">
                                <label class="text-sm">2LDK</label>
                            </div>
                            <div class="ui slider checkbox w-1/3">
                                <input type="checkbox" tabindex="0">
                                <label class="text-sm">3D</label>
                            </div>
                            <div class="ui slider checkbox w-1/3">
                                <input type="checkbox" tabindex="0">
                                <label class="text-sm">3DK</label>
                            </div>
                            <div class="ui slider checkbox w-1/3">
                                <input type="checkbox" tabindex="0">
                                <label class="text-sm">3LDK</label>
                            </div>
                            <div class="ui slider checkbox w-1/3">
                                <input type="checkbox" tabindex="0">
                                <label class="text-sm">4K</label>
                            </div>
                            <div class="ui slider checkbox w-1/3">
                                <input type="checkbox" tabindex="0">
                                <label class="text-sm">4DK</label>
                            </div>
                            <div class="ui slider checkbox w-1/3">
                                <input type="checkbox" tabindex="0">
                                <label class="text-sm">4LDK</label>
                            </div>
                            <div class="ui slider checkbox">
                                <input type="checkbox" tabindex="0">
                                <label class="text-sm">4LDK以上</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="ui slider py-4 flex space-x-2 items-center">
                        <div class="ui slider">
                            <label class="text-sm font-semibold">築年数</label>
                        </div>
                        <select name="age" id="age"
                        class="border-solid border-gray border px-2 py-1 rounded text-sm">
                            <option value="0">指定しない</option>
                            <option value="1">新 築</option>
                            <option value="2">1年以内</option>
                            <option value="3">3年以内</option>
                            <option value="4">5年以内</option>
                            <option value="5">7年以内</option>
                            <option value="6">10年以内</option>
                            <option value="7">15年以内</option>
                            <option value="8">20年以内</option>
                            <option value="9">25年以内</option>
                            <option value="10">30年以内</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div  class="mt-10">
            <div class="bg-navy-blue text-white rounded font-semibold text-center">物件種別</div>
            <div class="mb-5 border-l border-gray-400 py-1 px-2 mt-3">
                <div>
                    <div>
                        <div class="ui slider checkbox">
                        <label class="text-sm font-semibold">マンション</label>
                        </div>
                        <ul class="flex space-x-4">
                            <div class="ui slider checkbox">
                                <input type="checkbox" tabindex="0" checked>
                                <label class="text-sm">新　築</label>
                            </div>
                            <div class="ui slider checkbox">
                                <input type="checkbox" tabindex="0">
                                <label class="text-sm">中　古</label>
                            </div>
                        </ul>
                    </div>
                    <div class="mt-3">
                        <div class="ui slider checkbox">
                            <label class="text-sm font-semibold">アパート</label>
                        </div>
                        <ul class="flex space-x-4">
                            <div class="ui slider checkbox">
                                <input type="checkbox" tabindex="0" checked>
                                <label class="text-sm">新　築</label>
                            </div>
                            <div class="ui slider checkbox">
                                <input type="checkbox" tabindex="0">
                                <label class="text-sm">中　古</label>
                            </div>
                        </ul>
                    </div>
                    <div class="mt-3">
                        <div class="ui slider checkbox">
                            <label class="text-sm font-semibold">一戸建て</label>
                        </div>
                        <ul class="flex space-x-4">
                            <div class="ui slider checkbox">
                                <input type="checkbox" tabindex="0" checked>
                                <label class="text-sm">新　築</label>
                            </div>
                            <div class="ui slider checkbox">
                                <input type="checkbox" tabindex="0">
                                <label class="text-sm">中　古</label>
                            </div>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>

        <div class="banner flex flex-col space-y-4 mt-10">
            <img src="/image/banner.jpeg">
            <img src="/image/banner-3.gif">
            <img src="/image/banner-2.png">
            <img src="/image/banner.jpeg">
            <img src="/image/banner-3.gif">
        </div>

    </div>
</template>