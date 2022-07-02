/**
 *
 * @param { string } prefix
 */
exports.help = (prefix) => {
    return `
┌─「 Owner Bot」
├ Hi %name
├ Selamat Datang Di Chat WhatsApp Owner
├
├ Tanggal : %day_of_week%/%day_of_month_short%/%month_name%/%year%
├ Batrei : %battery%%
├ Bot : wa.me/681395861695
├ Zona WIB : jam %hour_of_day%{%am/pm%}:%minute% menit
├ Grup :%reply_count_groups% 
├ Pesan Diterima :%reply_count_contacts%
├ total pesan :%reply_count_overall%
├─────────────
├ Silahkan Tinggalkan Pesan,
├ Owner Akan Segera Membalas.
└─────────────`
}
