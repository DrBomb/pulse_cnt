load("api_log.js");
let pulse_cnt = {
    // Initialize a counter with the default values.
    // #`pulse_cnt.init(unit, channel, signal_gpio, control_gpio)`
    // - unit: One of the 8 counter units available on the ESP32, from 0 to 7.
    // - channel: One of the two channels available to the counter units. 0 and 1.
    // - signal_gpio: The GPIO pin receiving the pulse signal.
    // - control_gpio: The GPIO pin receiving the control signal. Use -1 if not planning to use. The control signals are set to do nothing by default.
    init: ffi("int pulse_cnt_set_default_config(int, int, int, int)"),

    // Gets the counter value of the specified unit.
    // #`pulse_cnt.get_counter_value(unit)`
    // - unit: Unit to get the value from. From 0 to 7.
    //
    // This function has not been tested, if it does not work open an issue.
    get_counter_value: ffi("int pulse_cnt_get_counter_value(int)"),

    // Pauses the counter unit. It won't count more unless called to resume.
    // #`pulse_cnt.pause_counter(unit)`
    // - unit: The unit to be paused. From 0 to 7.
    // 
    // This function has not been tested, if it does not work open an issue.
    pause_counter: ffi("int pcnt_counter_pause(int)"),

    // Resumes a previously paused counter unit.
    // #`pulse_cnt.resume_counter(unit)
    // - unit: Unit to be resumed. From 0 to 7.
    //
    // This function has not been tested, if it does not work open an issue.
    resume_counter: ffi("int pcnt_counter_resume(int)"),
    
    // Clears a counter unit back to 0
    // #`pulse_cnt.clear_counter(unit)
    // - unit: Unit to be cleared. From 0 to 7.
    //
    // This function has not been tested, if it does not work open an issue.
    clear_counter: ffi("int pcnt_counter_clear(int)"),

    // Sets the modes for the counter
    // #`pulse_cnt.set_mode(unit, channel, pos_mode, neg_mode, hctrl_mode, lctrl_mode)`
    // - unit: The unit to set the mode. From 0 to 7.
    // - channel: The channel to set. 0 or 1.
    // - pos_mode: The action when the signal has a positive edge. Can be:
    //   - pulse_cnt.PCNT_COUNT_DIS: Do nothing.
    //   - pulse_cnt.PCNT_COUNT_INC: Increase the counter.
    //   - pulse_cnt.PCNT_COUNT_DEC: Decrease the counter.
    // - neg_mode: The action when the signal has a negative edge. Can be:
    //   - pulse_cnt.PCNT_COUNT_DIS: Do nothing.
    //   - pulse_cnt.PCNT_COUNT_INC: Increase the counter.
    //   - pulse_cnt.PCNT_COUNT_DEC: Decrease the counter.
    // - hctrl_mode: What to do when the signal applied to the control_pin is high. Can be:
    //   - pulse_cnt.PCNT_MODE_KEEP: Do nothing.
    //   - pulse_cnt.PCNT_MODE_REVERSE: Reverse the count direction, if counting up, then count down.
    //   - pulse_cnt.PCNT_MODE_DISABLE: Disable counting until the control signal changes.
    // - lctrl_mode: What to do when the signal applied to the control_pin is low. Can be:
    //   - pulse_cnt.PCNT_MODE_KEEP: Do nothing.
    //   - pulse_cnt.PCNT_MODE_REVERSE: Reverse the count direction, if counting up, then count down.
    //   - pulse_cnt.PCNT_MODE_DISABLE: Disable counting until the control signal changes.
    //
    // This function has not been tested, if it does not work open an issue.
    set_mode: ffi("int pcnt_set_mode(int, int, int, int, int, int)"),

    // Change the pins assigned to a unit/channel pair.
    // #`pulse_cnt.set_pin(unit, channel, signal_gpio, control_gpio)`
    // - unit: The unit to set. From 0 to 7.
    // - channel: The channel to set. 0 or 1.
    // - signal_gpio: The GPIO pin set to receive the signal.
    // - control_gpio: The GPIO pin set to control the signal. Use -1 if unused.
    //
    // This function has not been tested, if it does not work open an issue.
    set_pin: ffi("int pcnt_set_pin(int, int, int, int)"),

    // Enable the input filter on a specified unit.
    // #`pulse_cnt.enable_filter(unit)`
    // - unit: The unit to enable the filter. From 0 to 7
    //
    enable_filter: ffi("int pcnt_filter_enable(int)"),

    // Disable the input filter on a specified unit.
    // #`pulse_cnt.disable_filter(unit)`
    // - unit: The unit to disable the filter. From 0 to 7.
    //
    disable_filter: ffi("int pcnt_filter_disable(int)"),

    // Set an unit's filter to a value.
    // #`pulse_cnt.set_filter_value(unit, value)`
    // - unit: The unit to set the filter. From 0 to 7.
    // - value: The value to set the filter to. It's a 10 bit number so it should be limited to 1023.
    //
    // The value is the time counted in APB_CLK cycles. Any pulses lasting shorter than this will be ignored when the filter is enabled.
    set_filter_value: ffi("int pcnt_set_filter_value(int, int)"),

    // Get the filter value from an unit.
    // #`pulse_cnt.get_filter_value(unit)`
    // - unit: The unit to read the filter value from. From 0 to 7.
    get_filter_value: ffi("int pulse_cnt_get_filter_value(int)"),
    PCNT_MODE_KEEP: 0,
    PCNT_MODE_REVERSE: 1,
    PCNT_MODE_DISABLE: 2,
    PCNT_COUNT_DIS: 0,
    PCNT_COUNT_INC: 1,
    PCNT_COUNT_DEC: 2,
    PCNT_EVT_L_LIM: 0,
    PCNT_EVT_H_LIM: 1,
    PCNT_EVT_THRES_0: 2,
    PCNT_EVT_THRES_1: 3,
    PCNT_EVT_ZERO: 4,
};
