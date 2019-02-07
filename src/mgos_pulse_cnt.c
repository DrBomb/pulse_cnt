#include "mgos_pulse_cnt.h"
#include "common/cs_dbg.h"

bool mgos_pulse_cnt_init(void){
    return true;
}

int pulse_cnt_set_default_config(int pcnt_unit, int pcnt_channel, int signal_gpio, int control_gpio){
    int res;
    pcnt_config_t config = {
    .pulse_gpio_num = signal_gpio,
    .ctrl_gpio_num = control_gpio,
    .lctrl_mode = PCNT_MODE_KEEP,
    .hctrl_mode = PCNT_MODE_KEEP,
    .pos_mode = PCNT_COUNT_INC,
    .neg_mode = PCNT_COUNT_DIS,
    .counter_h_lim = 32767,
    .counter_l_lim = -32767,
    .unit = pcnt_unit,
    .channel = pcnt_channel,
    };
    res = pcnt_unit_config(&config);
    pcnt_counter_clear(pcnt_unit);
    pcnt_counter_resume(pcnt_unit);
    return res;

}

int pulse_cnt_get_counter_value(int unit){
    int16_t value = 0;
    pcnt_get_counter_value(unit, &value);
    return value;
}

int pulse_cnt_get_filter_value(int unit){
    uint16_t value = 0;
    pcnt_get_filter_value(unit, &value);
    return value;
}
