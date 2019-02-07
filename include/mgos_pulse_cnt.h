#ifndef PULSE_CNT_MOS
#define PULSE_CNT_MOS

#include <stdbool.h>
#include <stdint.h>
#include "mgos_init.h"
#include "driver/pcnt.h"

#ifdef __cplusplus
extern "C" {
#endif

bool mgos_pulse_cnt_init(void);

int mgos_pulse_cnt_set_default_config(int pcnt_unit, int pcnt_channel, int input_gpio, int control_gpio);

int mgos_pulse_cnt_get_counter_value(int unit);

int mgos_pulse_cnt_get_filter_value(int unit);

#ifdef __cplusplus
}
#endif

#endif


